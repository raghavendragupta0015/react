import { useParams } from "react-router-dom";

function CourseDetail() {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <h1>{params.id} CourseDetail page</h1>
    </div>
  );
}

export default CourseDetail;
