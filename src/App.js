import { members } from "./helpers/members";

function App() {
  return (
    <div class="app">
      <div class="home">
        <HomeSection />
        <MemberSection />
        <Footer />
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <div class="overlap-group">
      <div class="div">
        <div class="rectangle-2"></div>
        <img
          class="IMG"
          src="https://c.animaapp.com/Bfeg6Lq5/img/img-7623-1.png"
          alt="gradient"
        />
        <img
          class="img"
          src="https://c.animaapp.com/Bfeg6Lq5/img/gradient-1.png"
          alt="gradient"
        />
        <div class="rectangle-3"></div>
        <p class="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="NEWS-UPDATES">NEWS &amp; UPDATES</div>

        <div class="rectangle-4"></div>
        <img
          class="intersect"
          src="https://c.animaapp.com/Bfeg6Lq5/img/intersect.png"
          alt="intersect"
        />
        <div class="rectangle-5"></div>
        <div class="text-wrapper-2">Home</div>
        <img
          class="IMG-2"
          src="https://c.animaapp.com/Bfeg6Lq5/img/img-4577-1@2x.png"
          alt="cover"
        />
        <div class="text-wrapper-3">Member</div>
        <div class="text-wrapper-4">Resources</div>
        <img class="ellipse" src="img/ellipse-2.svg" alt="rectangle" />
        <img
          class="group"
          src="https://c.animaapp.com/Bfeg6Lq5/img/group-3@2x.png"
          alt="rectangle"
        />
        <img class="rectangle-6" src="img/rectangle-13.svg" alt="rectangle" />
        <div class="MISSION-VISION">MISSION &amp; VISION</div>
        <div class="college-student">
          College <br />
          Student
          <br />
          Government
        </div>
        <p class="text-wrapper-5">By the students, For the students.</p>
        <img
          class="img-2"
          src="https://c.animaapp.com/Bfeg6Lq5/img/home.svg"
          alt="rectangle"
        />
        <img class="rectangle-7" src="img/rectangle-7.svg" alt="rectangle" />
        <img
          class="search"
          src="https://c.animaapp.com/Bfeg6Lq5/img/search.svg"
          alt="rectangle"
        />
        <img class="rectangle-8" src="img/rectangle-8.svg" alt="rectangle" />
        <div class="rectangle-9"></div>
        <div class="rectangle-10"></div>
        <p class="text-wrapper-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="text-wrapper-7">CONTACTS</div>
        <div class="rectangle-11"></div>
        <div class="text-wrapper-8">CLICK LINK</div>
      </div>
      <div class="div-wrapper">
        <div class="text-wrapper-9">Explore</div>
      </div>
    </div>
  );
}

function MemberSection() {
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
        <div class="text-wrapper">CSG Officers 2024-2025</div>
      </div>
      <img class="rectangle-13" src="img/rectangle-19.svg" alt="rectangle" />
      <div class="frame">
        <div class="overlap-group-2 members">
          {members.map((member) => (
            <MemberCard name={member.name} position={member.position} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberCard({ name, position }) {
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

function Footer() {
  return (
    <img
      class="intersect-2"
      src="https://c.animaapp.com/Bfeg6Lq5/img/intersect-1.png"
      alt="intersect"
    />
  );
}

export default App;
