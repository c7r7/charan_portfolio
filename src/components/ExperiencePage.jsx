import { experienceData } from "../resources/data";
import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperiencePage = () => {
    return (
        <section id="experience">
            <div className="main-content">
                <div style={{ height: "90px" }}></div>
                <h3 className="heading">Work Experience</h3>
                <VerticalTimeline lineColor="#0984e3">
                    {
                        experienceData.map((item, index) => (
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                    contentStyle={{
                                        background: "#fdfdfd",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        textAlign: "left",
                                    }}
                                    contentArrowStyle={{
                                        borderRight: "0.4rem solid #9ca3af",
                                    }}
                                    date={item.date}
                                    icon={item.icon}
                                    iconStyle={
                                        {
                                            background: "white",
                                            fontSize: "1.5rem",
                                            border: "2px solid #0984e3"
                                        }
                                    }
                                    className="vertical-timeline-element"
                                >
                                    <h2 style={{
                                        fontWeight: "bold",
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}>{item.company}</h2>
                                    <h3 style={{
                                        fontWeight: "bold",
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}>{item.title}</h3>
                                    <p style={{
                                        marginTop: "0 !important",
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}>{item.location}</p>
                                    {
                                        index === 0 && (

                                            <p style={{ fontFamily: "'Times New Roman', sans-serif" }}>
                                            <b>Project: Oracle Banking Corporate Lending</b>
                                            <span style={{ fontFamily: "Times New Roman, serif", fontWeight: 800, color: "grey" }}>
                                            <br /><br />
                                            OBCL is a software solution designed specifically for banks and financial institutions to manage the complexities of corporate lending.<br />
                                            1) Loan Origination and Processing: It helps streamline the entire loan lifecycle, from loan origination, underwriting, and approval to disbursement. This ensures that the process is more efficient and consistent.<br />
                                            2) Loan Servicing: Oracle Banking Corporate Lending supports ongoing loan servicing, including interest rate calculations, payment schedules, and adjustments. It helps automate routine tasks and ensures accurate record-keeping.<br />
                                            3) Collateral Management: It provides features to manage collateral tied to loans, ensuring that all collateral assets are tracked, valued, and maintained appropriately.
                                            </span>

                                            <br /><br />
                                            <b>As an Associate Consultant:</b>
                                            </p>

                                        )
                                    }
                                    {
                                        index === 1 && (
                                            <p style={{ fontFamily: "'Times New Roman', sans-serif" }}>
                                            <b> Project: Empties Return Forecasting - Nigeria Logistics Analysis </b> <span style={{fontFamily: "Times New Roman, serif", fontWeight: 800, color: "grey" }}> Predict the weekly estimated Empties volume for all the Returnable Groups at the DC level using the historical sales and returns which would help in better production planning. </span> <br /> <br /> <b> As a Data Scientist Intern: </b> 
                                            </p>
                                        )
                                    }
                                    {item.description.split('\n').map((line, i) => (
                                        <p key={i} style={{ fontWeight: 800, color: "grey", fontFamily: "'Times New Roman', sans-serif", }}>{line}</p>
                                    ))}

                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))
                    }
                </VerticalTimeline>
            </div>
            <div style={{ height: "50px" }}></div>
        </section>
    );
}

export default ExperiencePage;