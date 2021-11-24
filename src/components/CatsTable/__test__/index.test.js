import {render} from "@testing-library/react";
import CatsTable from '../index';
import {catsMock} from "./mocks/mocks";

const setup = (props) => {
  return render(<CatsTable data={props.data} totalCount={props.totalCount}/>)
}

describe("<CatsTable />", () => {
  it('should be visible in the DOM', function () {
    const { getByText } = setup({data: catsMock, totalCount: catsMock.length});
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Text')).toBeInTheDocument();
  });

  it('should render correct count of rows include header', function () {
    const { container } = setup({data: catsMock, totalCount: catsMock.length});
    const countOfRows = container.getElementsByTagName('tr').length;

    expect(countOfRows).toBe(3);
  });
})