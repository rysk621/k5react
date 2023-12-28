export default function MyButton({ caption, handleOnClick, bColor }) {
    const bColorLt = {
        'blue': 'hover:text-blue-700',
        'black': 'hover:text-black-700',
        'rose': 'hover:text-rose-700',
        'orange': 'hover:text-orange-700',
        'green': 'hover:text-green-700',
    };
    return (
        <button onClick={handleOnClick}
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
                    hover:bg-gray-100 ${bColorLt[bColor]} focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
                    dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>{caption}</button>
    )
}
