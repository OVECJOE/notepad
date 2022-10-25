import { StyledAllNotesContainer } from "../styles"
import { OtherNotes } from "./OtherNotes"
import PinnedNotes from "./PinnedNotes"

const AllNotes = () => {
  return (
    <StyledAllNotesContainer>
      <div className="top-container">
        <h1 className="top-container-heading">All Notes</h1>
        <form className="search-bar">
          <img src={require('../assets/search.svg').default} alt="" />
          <input type="search" placeholder="Search" />
        </form>
      </div>
      <div className="pinned-notes-container">
        <div className="container-header">
          <div className="options-set">
            <img src={require('../assets/edit.svg').default} alt="Create new note" />
            <img src={require('../assets/grid-view.svg').default} alt="View as" />
            <img src={require('../assets/apparent-filter.svg').default} alt="Filter options" />
          </div>
          <h3 className="heading">
            PINNED NOTE
            <div className="line"></div>
          </h3>
        </div>
        <PinnedNotes />
        <h3 className="heading">
            OTHER NOTES
            <div className="line"></div>
        </h3>
        <OtherNotes />
      </div>
    </StyledAllNotesContainer>
  )
}

export default AllNotes