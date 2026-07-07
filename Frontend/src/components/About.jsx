import useReveal from "../useReveal";
import "./About.css";

const About = () => {
    const titleRef = useReveal();
    const textRef = useReveal();
    const eduRef = useReveal();

    return (
        <section className="section" id="about">
            <div className="container">
                <hr className="section-divider" />

                <div className="reveal" ref={titleRef}>
                    <p className="section-label">01 — About</p>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-layout">
                    <div className="about-text reveal" ref={textRef}>
                        <p className="about-intro">
                            I'm an <strong>Information Technology</strong>{" "}
                            student at Harcourt Butler Technical University,
                            Kanpur (2023–2027) with a CGPA of{" "}
                            <strong>7.54</strong>. I balance academics with a
                            deep passion for competitive programming and
                            software development.
                        </p>
                        <p className="about-body">
                            My journey involves solving complex algorithmic
                            problems and building efficient software solutions.
                            I've solved over{" "}
                            <strong>2000+&nbsp;problems</strong> across various
                            coding platforms.
                        </p>

                        <div className="achievements">
                            <h3 className="achievements-heading">
                                Key Achievements
                            </h3>
                            <ul className="achievements-list">
                                <li>
                                    <span className="ach-marker">—</span>{" "}
                                    Secured the <strong>60th rank</strong> out
                                    of 100+ teams in the{" "}
                                    <strong>
                                        ICPC Kanpur Onsite Regional Contest 2025
                                    </strong>{" "}
                                    and <strong>116th rank</strong> out of 300+
                                    teams in the{" "}
                                    <strong>
                                        ICPC Amritapuri Onsite Regional Contest
                                        2025
                                    </strong>
                                    .
                                </li>
                                <li>
                                    <span className="ach-marker">—</span>{" "}
                                    Secured the <strong>157th rank</strong> out
                                    of 2,930 teams in the{" "}
                                    <strong>
                                        ICPC Preliminary Contest 2025
                                    </strong>
                                    .
                                </li>
                                <li>
                                    <span className="ach-marker">—</span>{" "}
                                    Achieved{" "}
                                    <strong>Expert (Max Rating: 1670)</strong>{" "}
                                    on Codeforces,{" "}
                                    <strong>Knight (Max Rating: 2054)</strong>{" "}
                                    on LeetCode, and{" "}
                                    <strong>4 star (Max Rating: 1881)</strong>{" "}
                                    on CodeChef.
                                </li>
                                <li>
                                    <span className="ach-marker">—</span>{" "}
                                    Secured{" "}
                                    <strong>2nd Best Innovators Award</strong>{" "}
                                    at KodeKalesh’25 Devfolio Hackathon
                                    (sponsored by AWS, GfG, EthIndia) among
                                    2000+ participants.
                                </li>
                                <li>
                                    <span className="ach-marker">—</span>{" "}
                                    Secured <strong>Rank 4095</strong> in the
                                    Meta Hacker Cup 2024 and qualified for Round
                                    2 among thousands of global participants.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="education reveal" ref={eduRef}>
                        <h3 className="education-heading">Experience</h3>
                        <div className="timeline">
                            <div className="timeline-entry">
                                <span className="timeline-year">
                                    May 2026 – Jul 2026
                                </span>
                                <h4 className="timeline-title">STEP Intern</h4>
                                <p className="timeline-place">
                                    Maruti Suzuki India Limited, Gurugram
                                </p>
                            </div>
                        </div>

                        <h3
                            className="education-heading"
                            style={{ marginTop: "2.5rem" }}
                        >
                            Education
                        </h3>
                        <div className="timeline">
                            <div className="timeline-entry">
                                <span className="timeline-year">
                                    2023 – 2027
                                </span>
                                <h4 className="timeline-title">
                                    B.Tech in Information Technology
                                </h4>
                                <p className="timeline-place">
                                    Harcourt Butler Technical University, Kanpur
                                </p>
                                <p className="timeline-detail">CGPA: 7.54</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
