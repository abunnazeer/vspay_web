const FlexCard = props => {
  return (
    <section
      style={Object.assign(
        { display: "flex" },
        { width: "90%" },
        { margin: "auto" },
        { alignItems: " center" },
        { gap: "1rem  " },

        { justifyContent: "center" && props.align }
      )}
    >
      {props.children}
    </section>
  );
};

export default FlexCard;
