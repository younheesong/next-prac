import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [title, id] = router.query.params || [];
  return (
    <div>
      <h4> {title}</h4>
    </div>
  );
}
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
