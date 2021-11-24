import { render } from "@testing-library/react";
import {Cell} from "../index";
import {cellMock} from './mock/mocks';

const setup = (props) => {
  return render(
      <table>
        <thead></thead>
        <tbody>
        <Cell data={props}/>
        </tbody>
      </table>
  )
};

describe("<Cell />", () => {
  it('should render in the DOM', function () {
    const {getByText} = setup(cellMock);

    expect(getByText('Due to the controversy, though loved by most, the Kashmir is overlooked by many cat fanciers.')).toBeInTheDocument()
  });

  it('should returns a null when we do not pass createdAt property', function () {
    const {container} = setup({...cellMock, createdAt: null});

    expect(Object.keys(container.getElementsByTagName('tr')).length).toBe(0)
  });
});