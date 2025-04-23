import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const filters = ["All", "Learn Coding", "MERN", "Live", "Javascript", "Frontend", "Backend", "JS", "Data Structures", "Algorithms", "React", "Tailwind CSS", "Git"];

function FilterBar({ selectedCategory, onCategoryChange }) {
  return (
    <div className="fixed top-16 hidden md:flex gap-4 px-4 py-2 ml-4 bg-white z-10 overflow-x-auto">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap ${
            selectedCategory === filter ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-900 hover:text-white'
          }`}
          onClick={() => onCategoryChange(filter)}
        >
          {filter}
        </button>
      ))}
      <KeyboardArrowRightOutlinedIcon className='mt-2'/>
    </div>
  );
}

export default FilterBar;
