package com.hoctuan.studentcodehub.service.post;

import java.util.UUID;

public interface PostReactionService {
    public void likePost(UUID postId);

    public void dislikePost(UUID postId);
}
