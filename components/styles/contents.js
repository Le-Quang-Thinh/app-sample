import styled from "styled-components";

const Content = styled.div`
  &.content-wrapper {
    margin-right:20px;
    width: 25vw;
  }
  .content {
    &-img {
      width:100%;
      height:100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
    }
  }
`;
export default Content