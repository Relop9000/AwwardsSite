const AnimatedTitle = (props) => {
  return (
    <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md: text-[6rem]">
      {props.title.split("<br/>").map((line, index) => (
        <div key={index} className="flex-center"></div>
      ))}
    </div>
  );
};
export default AnimatedTitle;
