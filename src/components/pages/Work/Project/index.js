import { useEffect, useState } from "react";
import './style.css';

function Project({ project }) {

    // get scroll position
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = document.body.getBoundingClientRect().top;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // get relative page position from scroll position
    let pagePosition = ((scrollPosition * -1) / window.innerHeight) * 100;

    // get elements by id
    const projectHeadlineOne = document.getElementById('project-headline-1');

    // change style variables based on page position
    if (pagePosition > 20) {

    };

    // set styles with modified variables
    const styles = {
        title: {

        },
        banner: {

        }
    };

    console.log('scroll', scrollPosition)
    console.log('window', window.innerHeight)
    console.log('page', pagePosition)

    return (

        <div className="project">

            <div id={"project-headline-" + project.id} className="sticky-container">

                <div className="project-headline">

                    <h1 className="project-title">{project.title}</h1>

                    <div className="project-links">
                        <h3 className="project-link"><a href={project.deployedLink}>Deployed Application</a></h3>
                        <h3 className="project-link-divider">|</h3>
                        <h3 className="project-link"><a href={project.repoLink}>GitHub Repository</a></h3>
                    </div>

                </div>

                <div className="project-banner" style={styles.banner}>
                    <a className="project-banner-link" href={project.deployedLink}>
                        <img id={'project-mockup-' + project.id} className="project-mockup" src={project.mockupPath} alt="Porefection mockup."></img>
                    </a>
                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            <div className="project-details">

                <div className="project-detail-column project-team">

                    <h2 className="detail-column-title">Team</h2>

                    {project.team.map((member, i) => (
                        member.role ? (
                            <div key={i}>
                                <p>
                                    {member.name}
                                </p>
                                <p className="team-member-role">
                                    {member.role}
                                </p>
                            </div>
                        ) : (
                            <p key={i}>
                                {member.name}
                            </p>
                        )))}

                </div>

                <div className="project-detail-column project-tools">

                    <h2 className="detail-column-title">Tools</h2>

                    <div className="project-tools-cloud">

                        {project.tools.map((tool, i) => (
                            <p key={i}>{tool}</p>
                        ))}

                    </div>

                </div>

                <div className="project-detail-column project-time">

                    <h2 className="detail-column-title">Time</h2>

                    <p>{project.time}</p>

                </div>

            </div>

        </div>

    );

}

export default Project;
