import * as Yup from "yup";

export default Yup.object().shape({
  code: Yup.string().min(2).required("Code need to have at least 2 signs"),
});
