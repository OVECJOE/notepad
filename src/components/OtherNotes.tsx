import { StyledNotesContainer } from "../styles"

export const OtherNotes = () => {
  return (
    <StyledNotesContainer>
      <div className="note-card">
        <div className="heading">
          <h2 className="note-title">
            TIMELINE AMAZING TASK
          </h2>
          <button className="menu-toggler">
            <img src={require('../assets/three-dots.svg').default} alt="" />
          </button>
        </div>
        <p className="note-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.
        </p>
      </div>
      <div className="note-card">
        <div className="heading">
          <h2 className="note-title">
            TIMELINE AMAZING TASK
          </h2>
          <button className="menu-toggler">
            <img src={require('../assets/three-dots.svg').default} alt="" />
          </button>
        </div>
        <p className="note-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.
        </p>
      </div>
      <div className="note-card">
        <div className="heading">
          <h2 className="note-title">
            TIMELINE AMAZING TASK
          </h2>
          <button className="menu-toggler">
            <img src={require('../assets/three-dots.svg').default} alt="" />
          </button>
        </div>
        <p className="note-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.
        </p>
      </div>
    </StyledNotesContainer>
  )
}