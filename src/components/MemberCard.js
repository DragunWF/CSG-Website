export default function MemberCard({ name, position, link }) {
  return (
    <div class="overlap-2">
      <div class="rectangle-14"></div>
      <div class="text-wrapper-12">{position}</div>
      <div class="frame-2"></div>
      <div class="text-wrapper-13">{name}</div>
      {link ? (
        <a href={link} rel="noreferrer" target="_blank">
          <img
            class="member-icon clickable-member-icon"
            src="svg/open-folder.svg"
            alt="icon"
          />
        </a>
      ) : (
        <img class="member-icon" src="svg/folder.svg" alt="icon" />
      )}
    </div>
  );
}
