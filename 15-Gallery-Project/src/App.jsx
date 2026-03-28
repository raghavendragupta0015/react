import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  //  Fetch data when page changes
  useEffect(() => {
    getData();
  }, [pageNum]);

  //  Smooth scroll
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageNum]);

  async function getData() {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=15`,
      );

      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  //  Loading UI
  if (loading) {
    return (
      <div className="bg-black h-screen flex justify-center items-center text-white text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/*  Page Animation */}
      <motion.div
        key={pageNum}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-5 flex-wrap justify-evenly"
      >
        {userData.map((data) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <div className="h-100 w-100 py-5">
                <img
                  className="rounded-xl h-full w-full object-cover"
                  src={data.download_url}
                  alt="img"
                />
                <h3 className="font-bold">{data.author}</h3>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/*  Buttons */}
      <div className="flex justify-center gap-7 mt-10">
        <button
          style={{ opacity: pageNum === 1 ? 0.5 : 1 }}
          onClick={() => {
            if (pageNum > 1) setPageNum((prev) => prev - 1);
          }}
          className="bg-amber-400 text-black px-6 mb-5 cursor-pointer active:scale-90 py-3 rounded"
        >
          prev
        </button>

        <button
          onClick={() => setPageNum((prev) => prev + 1)}
          className="bg-amber-400 text-black px-6 mb-5 cursor-pointer active:scale-90 py-3 rounded"
        >
          next
        </button>
      </div>

      {/*  Styled Pagination */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6 flex justify-center items-center shadow-inner">
        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20">
          <Stack spacing={2} className="items-center">
            <Pagination
              count={20}
              page={pageNum}
              onChange={(e, value) => setPageNum(value)}
              color="primary"
              size="large"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#fff",
                  borderRadius: "10px",
                  fontWeight: "600",
                },
                "& .Mui-selected": {
                  backgroundColor: "#facc15 !important",
                  color: "#000",
                },
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default App;
