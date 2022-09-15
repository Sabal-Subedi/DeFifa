import React, { useEffect, useState } from "react";
import { Fetchdata } from "../../hooks/getData";
import { dummyTeams } from "../dummyData/dummyTeamList";
import "./teamPage.scss";
import TeamLogo from "../../images/teamLogo.png";
import { useNavigate } from "react-router-dom";

export default function TeamPage() {
  const [loading, setLoading] = useState(true);
  const [teamList, setTeamList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const params = {
      FetchURL: `teams`,
      Type: "GET",
    };

    Fetchdata(params)
      .then(function (result) {
        if (result.status === "OK") {
          console.log("Post Result =>", result);
          const postResult = result.teamsList ? result.teamsList : "";
          setTeamList(postResult);
          setLoading(false);
        } else {
          setTeamList("");
          console.log("Fetch error!");
          setLoading(false);
        }
      })
      .catch((err) => {
        setTeamList("");
        console.log("Fetch error!", err);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (row) => {
    console.log(row);
    setLoading(true);

    const params = {
      FetchURL: `players/clubName/${row.clubName}`,
      Type: "GET",
    };

    Fetchdata(params)
      .then(function (result) {
        if (result.status === "OK") {
          console.log("Post Result =>", result);
          navigate(`/squad`, { state: { data: result.playersList } });
          setLoading(false);
        } else {
          console.log("Fetch error!");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Fetch error!", err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="team-container ps-3 pe-3 pt-3">
        <div className="sec-dataTable">
          <div className="team-header">Teams</div>
          {loading ? (
            <div className="spiner-container">
              <div class="d-flex justify-content-center spiner">
                <div class="spinner-grow text-danger me-3" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger me-3" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="team-container row ps-2 pe-2">
              {teamList &&
                teamList.map((team) => (
                  <div
                    onClick={() => handleRowClick(team)}
                    key={team.clubId}
                    className="tm-container col-sm-6 col-md-3 col-lg-2"
                  >
                    <div className="tm-logo">
                      <img src={TeamLogo} className="actual-tm" />
                    </div>
                    <div className="tm-name">{team.clubName}</div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
