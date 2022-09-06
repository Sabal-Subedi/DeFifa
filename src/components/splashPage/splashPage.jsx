import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Fetchdata } from "../../hooks/getData";
import "./splashPage.scss";

export default function SplashPage() {
  const [loading, setLoading] = useState(true);
  const [playerList, setPlayerList] = useState([]);

  const columns = [
    {
      name: "",
      grow: 1,
      center: true,
      selector: (row) => {
        return (
          <>
            <img src={row.photo} className="player-photo" />
          </>
        );
      },
    },
    {
      name: "NAME",
      width: "130px",
      // center: true,
      selector: (row) => row.name,
    },
    // { name: "Date", grow: 0, center: true, selector: (row) => row.LeaveTitle },
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
          setPlayerList(postResult);
          //   setOriginalList(postResult);
          setLoading(false);
        } else {
          setPlayerList([]);
          console.log("Fetch error!");
          setLoading(false);
        }
      })
      .catch((err) => {
        setPlayerList([]);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="splash-container ps-3 pe-3 pt-3">
        <div className="sec-dataTable">
          <div className="splash-header">Players</div>
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
                data={playerList}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="370px"
                highlightOnHover
                pointerOnHover
                responsive
                dense
                striped
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
