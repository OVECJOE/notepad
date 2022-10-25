import styled from 'styled-components';

export const StyledMenuBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  background-color: #262730;
  padding: 3rem 0;
  /* min-width: 15%; */
  width: 30%;

  & .windows-icons-group {
    display: flex;
    gap: .4rem;
    padding-left: 2.5rem;
  }

  & .nav-items-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & .active {
      border-right: 5px solid #fff;
      font-weight: 700;
    }
  }

  & .nav-items-container .nav-item {
    display: flex;
    gap: 1.5rem;
    text-decoration: none;
    color: white;
    align-items: center;
    justify-content: center;
    padding: .4rem 1.5rem .4rem 1rem;
  }

  & .nav-items-container .nav-item-active {
    border-right: 3px solid #fff;
  }

  & .nav-item .nav-item-text {
    font-size: 1.25rem;
  }
`

export const StyledWindowsIcon = styled.div<{bgcolor: string}>`
  width: 15px;
  height: 15px;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 50%;
`

export const StyledAllNotesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  padding: 4.5rem 4rem;

  & .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .top-container-heading {
      font-size: 1.75rem;
    }

    & .search-bar {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: .2rem .5rem .2rem 2.5rem;
      width: 40%;
      border-radius: 8px;
      background-color: #262730;

      & input {
        background-color: transparent;
        border: none;
        outline: none;
        min-height: 2.2rem;
        color: white;
        font-size: 1.2rem;
        width: 100%;
      }
    }
  }

  & .options-set {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  & .pinned-notes-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 0;

    & .heading {
      display: flex;
      gap: 1rem;
      font-weight: 300;
      align-items: center;
      justify-content: space-between;
      margin: 0;
    }
  }

  & .line {
    height: 1px;
    width: calc(75% + 8vmin);
    background-color: #68686C;
  }
`

export const StyledNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  font-family: 'Source Serif 4', sans-serif;

  & .note-card {
    border-radius: 3px;
    background-color: #FD99FF;
    padding: 1rem 2rem;
    color: black;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: .5rem;

    & .note-title {
      font-weight: 600;
      font-size: 20px;
      margin: 0;
    }

    & .note-content {
      font-weight: 300;
      font-size: 18px;
      margin: 0;
    }

    & .menu-toggler {
      background-color: transparent;
      border: none;
      padding: 0;
      
      & img {
        width: 35px;
      }
    }
  }
`