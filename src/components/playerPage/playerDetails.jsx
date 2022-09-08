import React from "react";
import "./playerDetails.scss";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";
import card from "../../images/card.png";
import kit from "../../images/kit.png";
import ultimate from "../../images/ultimateicon.png";
import avatar from "../../images/avatar.png";
import left from "../../images/leftfeet.png";
import right from "../../images/rightfeet.png";
// import { Radar } from "react-chartjs-2";
import Chart from "react-apexcharts";

export default function PlayerDetails({ setShowDetails, player }) {
  console.log(player);

  const radarOptions = {
    series: [
      {
        name: "Player Stats",
        data: [
          player.acceleration,
          player.shotPower,
          player.shortPassing,
          player.dribbling,
          player.defensiveAware,
          player.strength,
        ],
      },
    ],
    labels: ["PACE", "SHOTING", "PASING", "DRIBBLING", "DEFENDING", "PHYSICAL"],
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: "green",
          fill: {
            colors: ["#5c940dcc", "#d95c0f"],
          },
        },
      },
    },
    xaxis: {
      categories: ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"],
      labels: {
        show: true,
        style: {
          colors: ["a8a8a8"],
          fontSize: "14px",
          color: "#868e96 !important",
          fontFamily: "Arial",
        },
      },
    },
  };

  const barOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Overall", "Potential"],
    },

    series: [
      {
        name: "Player Stats",
        data: [player.overall, player.potential],
      },
    ],
  };

  const colorBox = (value) => {
    if (value < 50) {
      return "red-box";
    } else if (value < 70) {
      return "orange-box";
    } else if (value < 80) {
      return "yellow-box";
    } else if (value <= 90) {
      return "green-box";
    }
    return "darkgreen-box";
  };
  return (
    <div className="pd-container">
      <div className="pd-inner">
        <div className="pd-header">
          <div className="pd-title">
            <div className="ultimate-logo">
              <img src={ultimate} alt="" className="actual-ultimate" />
            </div>
            <div className="ultimate-title">PLAYER REVIEW</div>
          </div>
          <div className="pd-closebtn">
            <AiOutlineClose
              size={20}
              cursor="pointer"
              fontWeight="bold"
              className="actual-icon"
              onClick={() => setShowDetails(false)}
            />
          </div>
        </div>
        <div className="container-fluid pt-1 pb-2 pd-content">
          <div className="pd-body ms-1 me-1 mt-3 row">
            <div className="col-md-4 col-sm-6 pd-left">
              <div className="pd-card">
                <img src={card} alt="card" className="actual-card" />
                <div className="card-data">
                  <div className="card-left">
                    <div className="ovr">{player.overall}</div>
                    <div className="pos">{player.position}</div>
                    <hr className="under-line" />
                  </div>
                  <div className="card-right">
                    <div className="pd-kit">
                      <div className="actual-kit">
                        <img src={kit} alt="kit" className="actual-kit" />
                        <div className="number">{player.jerseyNo}</div>
                      </div>
                    </div>
                  </div>
                  <div className="pname">{player.name}</div>
                  {player.position !== "GK" ? (
                    <>
                      <div className="row properties">
                        <div className="col">
                          <div className="stat">
                            <strong>{player.acceleration}</strong> PAC
                          </div>
                          <div className="stat">
                            <strong>{player.shotPower}</strong> SHO
                          </div>
                          <div className="stat">
                            <strong>{player.shortPassing}</strong> PAS
                          </div>
                        </div>
                        <div className="col">
                          <div className="stat">
                            <strong>{player.dribbling}</strong> DRI
                          </div>
                          <div className="stat">
                            <strong>{player.defensiveAware}</strong> DEF
                          </div>
                          <div className="stat">
                            <strong>{player.strength}</strong> PHY
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row properties">
                        <div className="col">
                          <div className="stat">
                            <strong>{player.gkdiving}</strong> DIV
                          </div>
                          <div className="stat">
                            <strong>{player.gkhandling}</strong> HAN
                          </div>
                          <div className="stat">
                            <strong>{player.gkkicking}</strong> KICK
                          </div>
                        </div>
                        <div className="col">
                          <div className="stat">
                            <strong>{player.gkreflexes}</strong> REF
                          </div>
                          <div className="stat">
                            <strong>{player.acceleration}</strong> SPE
                          </div>
                          <div className="stat">
                            <strong>{player.gkpositioning}</strong> POS
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* radar chart */}
              <div className="radar-chart">
                <Chart
                  options={radarOptions}
                  series={radarOptions.series}
                  type="radar"
                  className="actual-radar"
                  height={500}
                />
              </div>
            </div>
            <div className="col-md-8 col-sm-6 pd-right">
              <div className="pd-info row">
                <div className="col-md-3 col-sm-6 col-6 pd-avatar">
                  <img src={avatar} alt="avatar" className="actual-avatar" />
                </div>
                <div className="col-md-9 col-sm-6 col-6 avatar-details">
                  <div className="avatar-name">{player.name}</div>
                  <div className="avatar-newrow">
                    <div className="avatar-pos">{player.position}</div>
                    <div className="avatar-age">{player.age}y.o.</div>
                    <div className="avatar-body">
                      {player.height} {player.weight}
                    </div>
                  </div>
                  <div className="avatar-feet">
                    <img
                      src={left}
                      alt="left feet"
                      className={
                        player.preferredFoot === "Left"
                          ? "trueFeet"
                          : "actual-feet"
                      }
                    />
                    <img
                      src={right}
                      alt="right feet"
                      className={
                        player.preferredFoot === "Right"
                          ? "trueFeet"
                          : "actual-feet"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="avatar-property row">
                <div className="col">
                  <div className="prop-one">
                    <span className="ovr">{player.overall}</span>
                  </div>
                  <div className="prop-two">Overall Rating</div>
                </div>
                <div className="col">
                  <div className="prop-one">
                    <span className="ovr">{player.potential}</span>
                  </div>
                  <div className="prop-two">Potential</div>
                </div>
                <div className="col">
                  <div className="prop-one">{player.value}</div>
                  <div className="prop-two">Value</div>
                </div>
                <div className="col">
                  <div className="prop-one">{player.wage}</div>
                  <div className="prop-two">Wage</div>
                </div>
              </div>
              <div className="avatar-spec row">
                <div className="col">
                  <div className="spec-head">PROFILE</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className="sub-head">Weak Foot </span>
                      {Array(player.weakFoot)
                        .fill()
                        .map((_, i) => (
                          <p>
                            <AiFillStar size={14} className="actual-star" />
                          </p>
                        ))}
                    </div>
                    <div className="body-content">
                      <span className="sub-head">Real Face</span>
                      {player.realFace}
                    </div>
                    <div className="body-content">
                      <span className="sub-head">Release Clause</span>
                      {player.releaseClause}
                    </div>
                    <div className="body-content">
                      <span className="sub-head">ID</span>
                      {player.id}
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="spec-head">{player.club}</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className="sub-head">Position</span>
                      {player.position}
                    </div>
                    <div className="body-content">
                      <span className="sub-head">Kit Number</span>
                      {player.jerseyNo}
                    </div>
                    <div className="body-content">
                      <span className="sub-head">Joined</span>
                      {player.joined}
                    </div>
                    <div className="body-content">
                      <span className="sub-head">Contract Valid Until</span>
                      {player.contract}
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatar-stat row">
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">ATTACKING</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.crossing)}>
                        {player.crossing}
                      </span>
                      <span className="sub-head">Crossing</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.finishing)}>
                        {player.finishing}
                      </span>
                      <span className="sub-head">Finishing</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.heading)}>
                        {player.heading}
                      </span>
                      <span className="sub-head">Heading Accuracy</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.shortPassing)}>
                        {player.shortPassing}
                      </span>
                      <span className="sub-head">Short Passing</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.volleys)}>
                        {player.volleys}
                      </span>
                      <span className="sub-head">Volleys</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">SKILLS</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.dribbling)}>
                        {player.dribbling}
                      </span>
                      <span className="sub-head">Dribbling</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.curve)}>
                        {player.curve}
                      </span>
                      <span className="sub-head">Curve</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.fkaccuracy)}>
                        {player.fkaccuracy}
                      </span>
                      <span className="sub-head">FK Accuracy</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.longPassing)}>
                        {player.longPassing}
                      </span>
                      <span className="sub-head">Long Passing</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.ballControl)}>
                        {player.ballControl}
                      </span>
                      <span className="sub-head">Ball Control</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">MOVEMENT</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.acceleration)}>
                        {player.acceleration}
                      </span>
                      <span className="sub-head">Acceleration</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.sprintSpeed)}>
                        {player.sprintSpeed}
                      </span>
                      <span className="sub-head"> Sprint Speed</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.agility)}>
                        {player.agility}
                      </span>
                      <span className="sub-head">Agility</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.reactions)}>
                        {player.reactions}
                      </span>
                      <span className="sub-head">Reactions</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.balance)}>
                        {player.balance}
                      </span>
                      <span className="sub-head">Balance</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">POWER</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.shotPower)}>
                        {player.shotPower}
                      </span>
                      <span className="sub-head">Shot Power</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.jumping)}>
                        {player.jumping}
                      </span>
                      <span className="sub-head">Jumping</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.stamina)}>
                        {player.stamina}
                      </span>
                      <span className="sub-head">Stamina</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.strength)}>
                        {player.strength}
                      </span>
                      <span className="sub-head">Strength</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.longShots)}>
                        {player.longShots}
                      </span>
                      <span className="sub-head">Long Shots</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">MENTALITY</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.overall)}>
                        {player.overall}
                      </span>
                      <span className="sub-head">Aggression</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.interceptions)}>
                        {player.interceptions}
                      </span>
                      <span className="sub-head">Interceptions</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.positioning)}>
                        {player.positioning}
                      </span>
                      <span className="sub-head">Positioning</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.vision)}>
                        {player.vision}
                      </span>
                      <span className="sub-head">Vision</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.penalties)}>
                        {player.penalties}
                      </span>
                      <span className="sub-head">Penalties</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.composure)}>
                        {player.composure}
                      </span>
                      <span className="sub-head">Composure</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">DEFENDING</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.defensiveAware)}>
                        {player.defensiveAware}
                      </span>
                      <span className="sub-head">Defensive Awareness</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.standingTackle)}>
                        {player.standingTackle}
                      </span>
                      <span className="sub-head">Standing Tackle</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.slidingTackle)}>
                        {player.slidingTackle}
                      </span>
                      <span className="sub-head">Sliding Tackle</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="spec-head">GOALKEEPING</div>
                  <div className="spec-body">
                    <div className="body-content">
                      <span className={colorBox(player.gkdiving)}>
                        {player.gkdiving}
                      </span>
                      <span className="sub-head">GK Diving</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.gkhandling)}>
                        {player.gkhandling}
                      </span>
                      <span className="sub-head">GK Handling</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.gkkicking)}>
                        {player.gkkicking}
                      </span>
                      <span className="sub-head"> GK Kicking</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.gkpositioning)}>
                        {player.gkpositioning}
                      </span>
                      <span className="sub-head">GK Positioning</span>
                    </div>
                    <div className="body-content">
                      <span className={colorBox(player.gkreflexes)}>
                        {player.gkreflexes}
                      </span>
                      <span className="sub-head">GK Reflexes</span>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-6 col-lg-3">
                  <div className="bar-chart">
                    <Chart
                      options={barOptions}
                      series={barOptions.series}
                      type="bar"
                      width={150}
                      height={190}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
