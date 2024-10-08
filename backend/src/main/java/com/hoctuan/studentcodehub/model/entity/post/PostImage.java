package com.hoctuan.studentcodehub.model.entity.post;

import com.hoctuan.studentcodehub.common.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@SuperBuilder
public class PostImage extends BaseEntity {
    @ManyToOne(optional = false)
    private Post post;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String image;
}
