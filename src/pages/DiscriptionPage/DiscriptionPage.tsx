import { useParams } from 'react-router-dom'

function DiscriptionPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Discription for card {id} </h1>
    </div>
  );
}

export default DiscriptionPage;