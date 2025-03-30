import React, { useEffect } from 'react'

const Skills = () => {



    return (
        <>
            <div id="skills" className="fun-factor-area default-padding ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Top Skills</h4>
                                <h2 className="title">See my expertise</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="fun-fact-style-two-items text-center">
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={80} data-speed={2000}>80</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">HTML</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="100ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={90} data-speed={2000}>90</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">CSS</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="200ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={80} data-speed={2000}>80</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">JavaScript</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="300ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={90} data-speed={2000}>90</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">Bootstrap</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="400ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={80} data-speed={2000}>80</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">MySQL</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="500ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={90} data-speed={2000}>90</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">Java</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="500ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={80} data-speed={2000}>80</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">.NET</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="500ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={90} data-speed={2000}>90</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">GitHub</span>
                            </div>
                        </div>
                        {/* End Single item */}
                        {/* Single item */}
                        <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="500ms">
                            <div className="icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Image Not Found" />
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to={80} data-speed={2000}>80</div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">Figma</span>
                            </div>
                        </div>
                        {/* End Single item */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
