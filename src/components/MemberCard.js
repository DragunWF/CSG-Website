export default function MemberCard({ name, position, link }) {
  return (
    <div className="overlap-2">
      <div className="rectangle-14"></div>
      <div className="text-wrapper-12">{position}</div>
      <div className="frame-2"></div>
      <div className="text-wrapper-13">{name}</div>
      {link ? (
        <a href={link} rel="noreferrer" target="_blank">
          <img
            className="member-icon clickable-member-icon"
            src="svg/open-folder.svg"
            alt="icon"
          />
        </a>
      ) : (
        <img className="member-icon" src="svg/folder.svg" alt="icon" />
      )}
    </div>
  );
}
