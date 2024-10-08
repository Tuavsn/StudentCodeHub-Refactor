import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Empty } from "antd";

export default function AboutPage() {
    return (
        <div>
            <Breadcrumb
                className="mb-2"
                items={[
                    {
                        title: (
                            <>
                                <HomeOutlined />
                                <span>Trang Chủ</span>
                            </>
                        )
                    },
                    {
                        title: (
                            <>
                                <InfoCircleOutlined />
                                <span>Thông tin</span>
                            </>
                        )
                    }
                ]}
            />
            <Empty />
        </div>
    )
}