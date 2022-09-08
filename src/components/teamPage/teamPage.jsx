import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Fetchdata } from "../../hooks/getData";
import { TopPlayers } from "../dummyData/dummyPlayerList";
import TeamDetails from "./teamDetails";
import "./teamPage.scss";

export default function TeamPage() {
  const [loading, setLoading] = useState(true);
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const columns = [
    {
      name: "NAME",
      width: "200px",
      // center: true,
      selector: (row) => {
        return (
          <>
            <div className="player-details">
              <div className="player-no">{row.jerseyNo}</div>
              <div className="player-two">
                <div className="player-name">{row.name}</div>
                <div className="player-position">{row.position}</div>
                <div className="player-nationality">{row.nationality}</div>
                <div className="player-club">{row.club}</div>
              </div>
            </div>
          </>
        );
      },
    },
    {
      name: "AGE",
      center: true,
      selector: (row) => row.age,
    },
    {
      name: "OVA",
      center: true,
      selector: (row) => row.overall,
    },
    {
      name: "POT",
      grow: 1,
      center: true,
      selector: (row) => row.potential,
    },
    {
      name: "TEAMS & CONTRACT",
      width: "165px",
      center: true,
      selector: (row) => `${row.joined} ~ ${row.contract}`,
    },
    {
      name: "VALUE",
      center: true,
      selector: (row) => row.value,
    },
    {
      name: "WAGE",
      grow: 1,
      center: true,
      selector: (row) => row.wage,
    },
  ];

  useEffect(() => {
    const params = {
      FetchURL: `players`,
      Type: "GET",
    };

    Fetchdata(params)
      .then(function (result) {
        if (result.status === "OK") {
          console.log("Post Result =>", result);
          const postResult = result.playersList ? result.playersList : "";
          setTeamList(postResult);
          setLoading(false);
        } else {
          setTeamList(TopPlayers);
          console.log("Fetch error!");
          setLoading(false);
        }
      })
      .catch((err) => {
        setTeamList(TopPlayers);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (row) => {
    console.log(row);
    setSelectedTeam(row);
    setShowDetails(true);
  };

  return (
    <>
      <div className="splash-container ps-3 pe-3 pt-3">
        <div className="sec-dataTable">
          <div className="splash-header">Teams</div>
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
            <div className="datatable-container ps-2 pe-2">
              <DataTable
                columns={columns}
                data={teamList}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="365px"
                highlightOnHover
                pointerOnHover
                responsive
                onRowClicked={handleRowClick}
                dense
                striped
              />
            </div>
          )}
        </div>
      </div>
      {showDetails && selectedTeam && (
        <TeamDetails setShowDetails={setShowDetails} player={selectedTeam} />
      )}
    </>
  );
}
