package com.hoctuan.studentcodehub.controller;

import com.hoctuan.studentcodehub.common.BaseController;
import com.hoctuan.studentcodehub.model.dto.group.GroupRequestDTO;
import com.hoctuan.studentcodehub.model.dto.group.GroupResponseDTO;
import com.hoctuan.studentcodehub.model.entity.group.Group;
import com.hoctuan.studentcodehub.service.group.GroupService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("api/group")
public class GroupController extends BaseController<
        Group,
        GroupResponseDTO,
        GroupRequestDTO,
        UUID> {
    private final GroupService groupService;

    public GroupController(GroupService groupService) {
        super(groupService);
        this.groupService = groupService;
    }
}
