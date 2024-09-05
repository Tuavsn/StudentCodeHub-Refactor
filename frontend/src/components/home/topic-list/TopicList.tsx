'use client'

import { Divider, Tabs } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { getTopic } from "@/libs/actions/post.acttion";
import { Topic } from "@/libs/types";
import dynamic from "next/dynamic";

const PostList = dynamic(
    () => {
        return import("../post-list/PostList")
    }, {ssr: false}
)

export default function TopicList() {

    const { data } = useQuery<Topic[]>('getTopic', getTopic)

    return (
        <>
            <Divider orientation="left">Post mới</Divider>
            <Tabs 
                className="mt-2" 
                defaultActiveKey="0" items={
                    data?.map((topic) => ({
                        key: topic.id,
                        label: topic.name,
                        children: (
                            <PostList posts={topic.posts} topic={topic} />
                        )
                    })
                )}
            >
            </Tabs>
        </>
    )
}