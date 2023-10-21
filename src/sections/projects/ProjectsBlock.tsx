import ProjectCard from "./projectCard/ProjectCard";
import style from "./projectsBlock.module.scss";

const Projects: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_h2__double}>
            <p>Выполненные проекты</p>
            <h2>У нас серьёзные заказчики</h2>
          </div>
          <div className={style.slider}>
            <div className={style.sliderCards}>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
            </div>
            <div className={style.nextBtn}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;