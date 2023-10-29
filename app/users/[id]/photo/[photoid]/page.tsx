import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const UserPhotDetail = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      UserPhotDetail {id} {photoid}
    </div>
  );
};

export default UserPhotDetail;
