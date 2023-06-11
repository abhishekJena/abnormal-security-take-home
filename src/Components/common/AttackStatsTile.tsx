import "./stats-tile-styles.css";

interface AttackStatsTileProps {
  total: number;
  statsTitle: string;
  loading: boolean;
  isSpam?: boolean;
}
const AttackStatsTile = ({
  total = 0,
  statsTitle,
  loading,
  isSpam = false
}: AttackStatsTileProps) => {
  return (
    <div className="stats-tile">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <span
            className="total"
            style={{ color: isSpam ? "orange" : "crimson" }}
          >
            {total}
          </span>
          <span className="stats-title">{statsTitle}</span>
        </>
      )}
    </div>
  );
};
export default AttackStatsTile;
