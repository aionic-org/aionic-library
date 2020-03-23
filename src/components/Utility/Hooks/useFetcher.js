import { useState, useEffect } from 'react';

import Api from '../../../services/api';

function useFetcher(url, params = {}, fnSort) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (url.length) {
					setError(null);
					setIsLoading(true);

					const result = await Api.fetchData(url, params);

					if (typeof fnSort === 'function') {
						setData(result.sort(fnSort));
					} else {
						setData(result);
					}
				}
				setIsLoading(false);
			} catch (err) {
				setError(Api.handleHttpError(err));
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return [data, isLoading, error, setData];
}

export default useFetcher;
