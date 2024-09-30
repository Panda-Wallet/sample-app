import { YoursIcon } from "yours-wallet-provider";

export type YoursConnectButtonProps = {
  onClick: () => void;
};

// NOTE: Using inline styling demo but prefer styled-components or CSS classes in real app
export const YoursConnectButton = (props: YoursConnectButtonProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem 2rem",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#fff",
        backgroundColor: "#000",
        border: "1px solid #A2FF86",
      }}
    >
      <YoursIcon size="2rem" />
      Connect Wallet
    </button>
  );
};
