import { Input } from "antd";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { useGetSingleMembershipQuery } from "../../../redux/features/Membership/getSingleMembershipApi";
import Loading from "../../../components/Loading/Loading";
import { useEditMembershipMutation } from "../../../redux/features/Membership/editMembershipApi";
import Swal from "sweetalert2";
const EditMemberShip = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data:singleMembership,isError,isLoading,isSuccess} = useGetSingleMembershipQuery(id);
  const [editMembership, { data: editMembershipData, error: editMembershipError }] = useEditMembershipMutation();
  
  if(isLoading){
    return <Loading/>
  }
  const handleEditMembership = (values) => {
    try {
      const updateValues = {...values,_id:id}
      if (!updateValues._id) {
        console.error("Error: id is undefined in values.");
        return;
      }
      editMembership(updateValues);
      console.log(editMembershipData);
      // console.log(editMembershipError);
      if(editMembershipData?.code == 200){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: editMembershipData?.message,
          showConfirmButton: false,
          timer: 1500
      });
      navigate('/dashboard/membership', { replace: true });
      window.location.reload();
      }
      // Access the data property of the response
    } catch (error) {
      // console.error("Edit Membership Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Please Try again",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };
const initialMembership = singleMembership?.data?.attributes
    return (
      <div className="ml-[24px] overflow-auto">
      <div className="mt-[32px] flex items-center pb-3 gap-2 cursor-pointer">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/dashboard/membership")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Edit Membership
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
          onFinish={handleEditMembership}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          // initialValues={singleMembership?.data?.attributes}
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
                name="title"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your  Membership Name!",
                  },
                ]}
                initialValue={initialMembership?.title}
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
                initialValue={initialMembership?.price}
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
                  name="PerDrugTestPrice"
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
                  initialValue={initialMembership?.PerDrugTestPrice}
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
                  name="PerBreathAlcoholTestPrice"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please input your Price Per Breath Alcohol Test!",
                    },
                  ]}
                  initialValue={initialMembership?.PerBreathAlcoholTestPrice
                    }
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
                initialValue={initialMembership?.features}
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
            Update
          </Button>
        </Form>
      </div>
    </div>
    );
}

export default EditMemberShip;
