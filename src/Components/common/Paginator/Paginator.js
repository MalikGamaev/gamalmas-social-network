import React, { useState } from 'react';
import style from './Paginator.module.css'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onChangeCurrentPage, portionSize = 10 }) => {
	const setTotalPages = Math.ceil(totalItemsCount / pageSize)
	const totalPages = []

	for (let i = 1; i <= setTotalPages; i++) {
		totalPages.push(i)
	}

	const portionCount = Math.ceil(setTotalPages / portionSize)
	const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={style.pagesBlock}>
			{portionNumber > 1 &&
				<button onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>
			}
			{totalPages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p =>
					<span className={currentPage != p && style.pageBlock}>
						<span
							className={currentPage === p && style.selectedPage}
							onClick={() => { onChangeCurrentPage(p) }}
						>
							{p}
						</span>
					</span>
				)}
			{portionCount > portionNumber &&
				<button onClick={() => setPortionNumber(portionNumber + 1)}>Дальше</button>
			}
		</div>
	);
};

export default Paginator;