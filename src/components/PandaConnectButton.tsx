import pandaIcon from "../assets/panda-icon.svg";

export type PandaConnectButtonProps = {
  onClick: () => void;
};

// NOTE: Using inline styling demo but prefer styled-components or CSS classes in real app
export const PandaConnectButton = (props: PandaConnectButtonProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        borderRadius: "0.5rem",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#1d1d1d",
        backgroundColor: "#A2FF86",
      }}
    >
      <img
        src={pandaIcon}
        alt="icon"
        style={{ marginRight: "1rem", width: "1.5rem", height: "1.5rem" }}
      />
      Connect Panda Wallet
    </button>
  );
};
