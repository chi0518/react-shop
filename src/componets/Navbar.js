import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3">
      <div className="flex items-center">
          <div className="w-80">
              <button onClick={() => navigate('/')} className="basis-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-9 inline text-white mr-2"
                  >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" 
                />
                </svg>
                <span className="font-bold text-white pr-6">HEN shop</span>
              </button>
            </div>
            <div className="">
              <button
                onClick={() => navigate('/best')}
                className="text-white pr-6 w-20 inline-block hover:text-blue-600 duration-500"
              >
                BEST
              </button>
              <button
                onClick={() => navigate('/all')}
                className="text-white w-20 inline-block hover:text-blue-600 duration-500"
              >
                SHOP ALL
              </button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
