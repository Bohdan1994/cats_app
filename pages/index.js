import styles from '../styles/Home.module.css'
import CatsTable from "../src/components/CatsTable";
import {useCats} from "../src/components/CatsTable/useCats";
import {getCats} from "../src/lib/api";
import {useRef, useState} from "react";

export default function Page({initialCats}) {
  const {cats, setCats, filterCats, totalCount} = useCats(initialCats);
  const filterRef = useRef();
  const getCatsRef = useRef();
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);

  const handleFilter = (e) => {
    e.preventDefault();
    setSpinner(true);
    filterCats(filterRef)
    setSpinner(false)
  };

  const handleGetCats = async (e) => {
    setError(false);
    const value = getCatsRef.current.value;
    e.preventDefault();

    if (!value) {
      return;
    }

    if (value >= 500) {
      setError('Invalid value');
      return;
    }

    setSpinner(true);
    await setCats({numberOfCats: getCatsRef.current, filterRange: filterRef.current})
    filterRef.current.value = '';
    setSpinner(false)
  }

  return (
      <div>
        <main className={styles.main}>
          {spinner ? <span className={styles.loader}>"Loading..."</span> : null}
          {error ? <span>{error}</span> : null}
          <form>
            <div className={styles.actions}>
              <div>
                <input type="number" ref={filterRef} placeholder={'Select min year eg:2019'}/>
                <button onClick={handleFilter}>Set min year</button>
              </div>
              <div>
                <input type="number" ref={getCatsRef} placeholder={'Enter number of cats max:500'} min={1} max={500}/>
                <button onClick={handleGetCats}>Submit</button>
              </div>
            </div>
            <div>
              <CatsTable data={cats} totalCount={totalCount}/>
            </div>
          </form>
        </main>
      </div>
  )
}

export const getServerSideProps = async ({ctx}) => {
  const resCats = await getCats(10);

  return {
    props: {
      initialCats: resCats.data
    }
  }
}
