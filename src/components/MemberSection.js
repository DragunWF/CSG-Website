import { members } from "../helpers/members";
import MemberCard from "./MemberCard";

export default function MemberSection() {
  return (
    <div>
      <img
        className="rectangle-12"
        src="img/rectangle-1.svg"
        alt="rectangle"
        draggable="false"
        oncontextmenu="return false;"
      />
      <div className="text-wrapper-10">Student Officials</div>
      <div className="text-wrapper-11">Meet our dedicated</div>
      <div className="overlap">
        <img
          className="gradient"
          src="img/member-section-gradient.png"
          alt="gradient"
          draggable="false"
          oncontextmenu="return false;"
        />
        <div className="rectangle"></div>
        <div className="text-wrapper">CSG Officers of 2024-2025</div>
      </div>
      <div className="frame">
        <div className="overlap-group-2 members">
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
