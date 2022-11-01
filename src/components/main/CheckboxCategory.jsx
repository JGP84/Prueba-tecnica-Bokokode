import styled, { createGlobalStyle } from "styled-components";
import { responsive } from "../../responsive";

const Checkbox = styled.input`
  width: 2.5em;
  height: 2.5em;
  margin-right: 10px;
`;

const categories = ["people", "premium", "pets", "food", "cities"];

const CheckboxCategory = () => {
  const handleChanger = () => console.log("hi handleChanger");

  return (
    <>
      <h3>Category</h3>

      {categories.map((item) => {
        return (
          <label>
            <input type="checkbox" />
            {item}
          </label>
        );
      })}
    </>
  );
};

export default CheckboxCategory;
