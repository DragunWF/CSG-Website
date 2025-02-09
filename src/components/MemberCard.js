export default function MemberCard({ name, position }) {
  return (
    <div class="overlap-2">
      <div class="rectangle-14"></div>
      <div class="text-wrapper-12">{position}</div>
      <div class="frame-2"></div>
      <div class="text-wrapper-13">{name}</div>
      <img
        class="chevron-down"
        src="https://c.animaapp.com/Bfeg6Lq5/img/chevron-down-14.svg"
        alt="chevron"
      />
    </div>
  );
}
