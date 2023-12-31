import style from "./advantageItem.module.scss";

interface IAdvantageItemLeft {
  title: string;
  description: string;
  img: string;
}

const AdvantageItemLeft = ({ title, description, img }: IAdvantageItemLeft) => {
  return (
    <div className={`${style.content} ${style.contentLeft}`}>
      <div className={style.descr}>
        <h3 className={style.title_h3}>{title}</h3>
        <p className={style.text}>{description}</p>
      </div>
      <div className={style.graphics}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default AdvantageItemLeft;
