import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

function HeathCareForm() {
  const initialValues = {
    fullName: "",
    idNumber: "",
    birthYear: "",
    gender: "",
    nationality: "",
    company: "",
    department: "",
    hasHealthInsurance: false,
    province: "",
    district: "",
    ward: "",
    address: "",
    phone: "",
    email: "",
    visitedCountries: "",
    symptoms: {
      fever: false,
      difficultyBreathing: false,
      pneumonia: false,
      soreThroat: false,
      fatigue: false,
    },
    contacts: {
      sickPerson: false,
      fromCOVIDArea: false,
      symptomaticPerson: false,
    },
  };

  const validationSchema = {
    fullName: Yup.string()
      .required("Họ tên là bắt buộc")
      .matches(/^[a-zA-ZÀ-ỹ ]*$/, "Họ tên chỉ nên chứa các ký tự chữ cái"),

    idNumber: Yup.string().required("Số hộ chiếu/CMND là bắt buộc"),

    birthYear: Yup.number()
      .required("Năm sinh là bắt buộc")
      .min(1900, "Năm sinh không hợp lệ"),

    gender: Yup.string(),

    nationality: Yup.string().required("Quốc tịch là bắt buộc"),

    company: Yup.string(),

    department: Yup.string(),

    hasHealthInsurance: Yup.boolean(),

    province: Yup.string().required("Tỉnh/Thành phố là bắt buộc"),

    district: Yup.string().required("Quận/Huyện là bắt buộc"),

    ward: Yup.string().required("Phường/Xã là bắt buộc"),

    address: Yup.string().required("Số nhà, đường là bắt buộc"),

    phone: Yup.string().required("Số điện thoại là bắt buộc"),

    email: Yup.string()
      .required("Email là bắt buộc")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Địa chỉ email không hợp lệ"
      ),

    visitedCountries: Yup.string().required(
      "Vui lòng cung cấp thông tin về các quốc gia đã đến."
    ),

    symptoms: Yup.object({
      fever: Yup.boolean(),
      difficultyBreathing: Yup.boolean(),
      pneumonia: Yup.boolean(),
      soreThroat: Yup.boolean(),
      fatigue: Yup.boolean(),
    }),

    contacts: Yup.object({
      sickPerson: Yup.boolean(),
      fromCOVIDArea: Yup.boolean(),
      symptomaticPerson: Yup.boolean(),
    }),
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Tờ khai y tế</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          toast.success("Đã gửi tới bộ y tế!");
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Họ tên
              </label>
              <Field
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
              />
              <ErrorMessage
                name="fullName"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="idNumber" className="form-label">
                Số hộ chiếu
              </label>
              <Field
                type="text"
                className="form-control"
                id="idNumber"
                name="idNumber"
              />
              <ErrorMessage
                name="idNumber"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="birthYear" className="form-label">
                Năm Sinh
              </label>
              <Field
                type="number"
                className="form-control"
                id="birthYear"
                name="birthYear"
              />
              <ErrorMessage
                name="birthYear"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Giới tính
              </label>
              <Field
                as="select"
                className="form-control"
                id="gender"
                name="gender"
              >
                <option value="">--Chọn giới tính--</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">
                Quốc tịch
              </label>
              <Field
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
              />
              <ErrorMessage
                name="nationality"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Công ty làm việc
              </label>
              <Field
                type="text"
                className="form-control"
                id="company"
                name="company"
              />
              <ErrorMessage
                name="company"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Bộ phận làm việc
              </label>
              <Field
                type="text"
                className="form-control"
                id="department"
                name="department"
              />
              <ErrorMessage
                name="department"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label
                htmlFor="hasHealthInsurance"
                className="form-label"
                style={{ marginRight: "10px" }}
              >
                Có thẻ bảo hiểm y tế?
              </label>
              <Field
                type="checkbox"
                className="form-check-input"
                id="hasHealthInsurance"
                name="hasHealthInsurance"
              />
              <ErrorMessage
                name="hasHealthInsurance"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <h2>Địa chỉ liên lạc tại việt nam</h2>
            <div className="mb-3">
              <label htmlFor="province" className="form-label">
                Province
              </label>
              <Field
                type="text"
                className="form-control"
                id="province"
                name="province"
              />
              <ErrorMessage
                name="province"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="district" className="form-label">
                District
              </label>
              <Field
                type="text"
                className="form-control"
                id="district"
                name="district"
              />
              <ErrorMessage
                name="district"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="ward" className="form-label">
                Ward
              </label>
              <Field
                type="text"
                className="form-control"
                id="ward"
                name="ward"
              />
              <ErrorMessage
                name="ward"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field
                type="text"
                className="form-control"
                id="address"
                name="address"
              />
              <ErrorMessage
                name="address"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Field
                type="text"
                className="form-control"
                id="phone"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="text"
                className="form-control"
                id="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="visitedCountries" className="form-label">
                Trong vồng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lănh thổ
                nào (Có thể đi qua nhiều quốc gia / Nếu không có thì ghi
                “Không”)
              </label>
              <Field
                type="textarea"
                rows={3}
                className="form-control"
                id="visitedCountries"
                name="visitedCountries"
              />
              <ErrorMessage
                name="visitedCountries"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào
                sau đây không?
              </label>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="fever"
                  name="symptoms.fever"
                />
                <label htmlFor="fever" className="form-check-label">
                  Sốt
                </label>
              </div>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="difficultyBreathing"
                  name="symptoms.difficultyBreathing"
                />
                <label
                  htmlFor="difficultyBreathing"
                  className="form-check-label"
                >
                  Khó thở
                </label>
              </div>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="pneumonia"
                  name="symptoms.pneumonia"
                />
                <label htmlFor="pneumonia" className="form-check-label">
                  Viêm phổi
                </label>
              </div>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="soreThroat"
                  name="symptoms.soreThroat"
                />
                <label htmlFor="soreThroat" className="form-check-label">
                  Đau họng
                </label>
              </div>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="fatigue"
                  name="symptoms.fatigue"
                />
                <label htmlFor="fatigue" className="form-check-label">
                  Mệt mỏi
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Trong vờng 14 ngày qua, Anh /Chị có tiếp súc với?
              </label>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="sickPerson"
                  name="contacts.sickPerson"
                />
                <label htmlFor="sickPerson" className="form-check-label">
                  Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                </label>
              </div>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="fromCOVIDArea"
                  name="contacts.fromCOVIDArea"
                />
                <label htmlFor="fromCOVIDArea" className="form-check-label">
                  Người từ nước có bệnh COVID-19
                </label>
              </div>
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="symptomaticPerson"
                  name="contacts.symptomaticPerson"
                />
                <label htmlFor="symptomaticPerson" className="form-check-label">
                  Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                </label>
              </div>
            </div>
            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-50"
                style={{ display: "block", margin: "auto" }}
              >
                Gửi đi
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default HeathCareForm;
