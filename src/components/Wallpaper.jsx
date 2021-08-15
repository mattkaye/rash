export const Wallpaper = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.src})`, position: props.position }}
      className="top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover opacity-50"
    ></div>
  );
};
