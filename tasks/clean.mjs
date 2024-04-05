import { deleteAsync } from "del";

const delFiles = ["./dist/**"];
const clean = () => {
  return deleteAsync(delFiles, {
    force: true,
  });
};

export { clean };
