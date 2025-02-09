import { members } from "../helpers/members";
import MemberCard from "./MemberCard";

export default function MemberSection() {
  return (
    <div>
      <img class="rectangle-12" src="img/rectangle-1.svg" alt="rectangle" />
      <div class="text-wrapper-10">Student Officials</div>
      <div class="text-wrapper-11">Meet our dedicated</div>
      <div class="overlap">
        <img
          class="gradient"
          src="https://c.animaapp.com/Bfeg6Lq5/img/gradient.png"
          alt="gradient"
        />
        <div class="rectangle"></div>
        <div class="text-wrapper">CSG Officers of 2024-2025</div>
      </div>
      <div class="frame">
        <div class="overlap-group-2 members">
          {members.map((member) => (
            <MemberCard
              name={member.name}
              position={member.position}
              link={member.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
