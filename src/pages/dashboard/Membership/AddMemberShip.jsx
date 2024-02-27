import { Input } from "antd";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";

const AddMemberShip = () => {
  // const [memberShipName, setMemberShiptName] = useState("");
  // const [price, setPrice] = useState("");
  // const [priceAlcoholTest, setPriceAlcoholTest] = useState("");
  // const [priceDrugTest, setPriceDrugTest] = useState("");
  // const [features, setFeatures] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  // const handleAddMembership = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     memberShipName,
  //     price,
  //     priceDrugTest,
  //     priceAlcoholTest,
  //     features,
  //   };
  //   console.log(data);
  // };

  const handleAddMembership = (values) => {
    console.log(values);
  };

  // const handleInputChange = (index, value) => {
  //   setFeatures((prevValues) => {
  //     const newValues = [...prevValues];
  //     newValues[index] = value;
  //     return newValues;
  //   });
  // };
  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[32px] flex items-center pb-3 gap-2 cursor-pointer">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/membership")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Add Membership
        </h1>
      </div>
      <div className="mt-[20px]">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleAddMembership}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex-1">
              <Form.Item
                // label="Membership Name"
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Membership Name
                  </span>
                }
                name="membershipName"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your  Membership Name!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setMemberShiptName(e.target.value)}
                  placeholder="Membership Name"
                  className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                  // type="text"
                />
              </Form.Item>
            </div>

            <div className="flex-1">
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Price
                  </span>
                }
                name="price"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Price!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  className="p-4 bg-[white]
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                  type="text"
                />
              </Form.Item>
            </div>
            <div className="flex gap-[25px]">
              <div className="flex-1">
                <Form.Item
                  name="priceDrugTest"
                  label={
                    <span className="text-[#222222] text-[18px] font-medium">
                      Price per Drug Test
                    </span>
                  }
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Price per Drug Test!",
                    },
                  ]}
                >
                  <Input
                    // onChange={(e) => setPriceDrugTest(e.target.value)}
                    placeholder="Price"
                    className="p-4 bg-[white]
               rounded w-full 
               justify-start 
               border-none
               mt-[12px]
               items-center 
               gap-4 inline-flex outline-none focus:border-none"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Form.Item
                  label={
                    <span className="text-[#222222] text-[18px] font-medium">
                      Price Per Breath Alcohol Test
                    </span>
                  }
                  name="priceAlcoholTest"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please input your Price Per Breath Alcohol Test!",
                    },
                  ]}
                >
                  <Input
                    // onChange={(e) => setPriceAlcoholTest(e.target.value)}
                    placeholder="Price"
                    className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-none
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex outline-none focus:border-none"
                    type="text"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                * Features
              </label>

              {/* {features.map((value, index) => {
              return (
                <Input
                  key={index}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Features"
                  className="p-4 bg-[white]
                rounded w-full 
                justify-start 
                border-none
                mt-[12px]
                items-center 
                gap-4 inline-flex outline-none focus:border-none"
                  type="text"
                />
              );
            })} */}

              <Form.List
                name="features"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(
                          new Error("At least 2 passengers")
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={true}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please input passenger's Feature or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Features"
                            // style={{
                            //   width: '100%',
                            // }}
                            className="p-4 bg-[white]
                    rounded
                    justify-start w-[120%]
                    border-none
                    mt-[12px]
                    items-center 
                    gap-4 inline-flex outline-none focus:border-none"
                          />
                        </Form.Item>

                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className=" dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        className="bg-[#3BA6F6] text-white h-[50px]"
                        onClick={() => add()}
                        style={{
                          width: "100%",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add Features
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </div>

          <Button
            // onClick={handleAddMembership}
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-[#3BA6F6] text-white rounded-lg"
          >
            Add Membership
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddMemberShip;
