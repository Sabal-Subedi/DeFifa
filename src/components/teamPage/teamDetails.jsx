import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fetchdata } from "../../hooks/getData";
import Pitch from "../../images/pitch.jpg";
import Player from "../../images/avatar.png";

import "./teamDetails.scss";

export default function TeamDetails() {
  const { state } = useLocation();
  const { data } = state;
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="td-container ps-3 pe-3 pt-3">
        <div className="sec-dataTable">
          <div className="td-header">Squad</div>
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
            <div className="td-content row ps-2 pe-2">
              <div className="pitch-logo">
                <img className="actual-pitch" alt="pitch" src={Pitch} />
              </div>

              {data.map((player) => (
                <div className="squad-lineUp">
                  <div className="row front-line">
                    <div className="pos-lw col-md-2 offset-md-3 col-sm-4 col-4">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Left Winger</div>
                      </div>
                    </div>

                    <div className="pos-st col-md-2 offset-md-5 col-sm-4 offset-sm-4 col-4 offset-4">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Striker</div>
                      </div>
                    </div>
                    <div className="pos-rw col-md-2 offset-md-7 col-sm-4 offset-sm-8 col-4 offset-8">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Right Winger</div>
                      </div>
                    </div>
                  </div>
                  {/* Second line */}
                  <div className="row second-line">
                    <div className="pos-lm col-md-2 offset-md-3 col-sm-4 col-4">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Left MidField</div>
                      </div>
                    </div>

                    <div className="pos-cdm col-md-2 offset-md-5 col-sm-4 offset-sm-4 col-4 offset-4">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Defensive MidField</div>
                      </div>
                    </div>
                    <div className="pos-rm col-md-2 offset-md-7 col-sm-4 offset-sm-8 col-4 offset-8">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Right MidField</div>
                      </div>
                    </div>
                  </div>
                  {/* third line */}
                  <div className="row third-line">
                    <div className="pos-lb col-md-2 offset-md-1 col-sm-3 col-3">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Left Back</div>
                      </div>
                    </div>

                    <div className="pos-lcb me-md-5 col-md-2 offset-md-4 col-sm-3 offset-sm-3 col-3 offset-3">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Left Center Back</div>
                      </div>
                    </div>
                    <div className="pos-rcb col-md-2 offset-md-6 col-sm-3 offset-sm-6 col-3 offset-6">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Right Center Back</div>
                      </div>
                    </div>
                    <div className="pos-rb col-md-2 offset-md-9 col-sm-3 offset-sm-9 col-3 offset-9">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Right Back</div>
                      </div>
                    </div>
                  </div>
                  {/* forth Line */}
                  <div className="row forth-line">
                    <div className="pos-gk col-md-2 offset-md-5 col-sm-4 offset-sm-4 col-4 offset-4">
                      <div className="player-img">
                        <img
                          src={Player}
                          alt="icon"
                          className="actual-player"
                        />
                      </div>
                      <div className="player-info">
                        <div className="player-stats">80</div>
                        <div className="player-name">Goal Keeper</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
