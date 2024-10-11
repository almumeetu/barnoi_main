<?php
/*
Template Name: Blog Page
*/

get_header(); ?>

<section class="blog__grid">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-8">
                <div class="blog__grid-left">
                    <div class="row">
                        <?php
                        // Define the query arguments
                        $args = array(
                            'post_type' => 'post', 
                            'posts_per_page' => 6, 
                        );
                        $blog_posts = new WP_Query($args);

                        // Loop through the posts
                        if ($blog_posts->have_posts()) :
                            while ($blog_posts->have_posts()) : $blog_posts->the_post(); ?>
                                <div class="col-xl-6">
                                    <article class="single__blog">
                                        <div class="single__blog-wrapper">
                                            <div class="blog__img">
                                                <a href="<?php the_permalink(); ?>">
                                                    <?php if (has_post_thumbnail()) : ?>
                                                        <?php the_post_thumbnail('full', array('class' => 'img-fluid', 'alt' => get_the_title())); ?>
                                                    <?php else : ?>
                                                        <img src="assets/img/blog/default-image.png" class="img-fluid" alt="default image">
                                                    <?php endif; ?>
                                                </a>
                                            </div>
                                            <div class="blog__content">
                                                <div class="blog__author d-flex justify-content-between">
                                                    <div class="blog__author-left">
                                                        <img src="/assets/img/blog/blog-icon/Vector.png" alt="blog-icon">
                                                        <span><?php echo get_the_date(); ?></span>
                                                        <span class="ml-20"><?php echo reading_time(); ?> min read</span>
                                                    </div>
                                                    <div class="blog__author-right">
                                                        <img class="ml-20 mr-10" src="/assets/img/blog/blog-icon/Ellipse201.png" alt="dot">
                                                        <span>By: <?php the_author(); ?></span>
                                                    </div>
                                                </div>
                                                <div class="blog__heading">
                                                    <a href="<?php the_permalink(); ?>">
                                                        <h4><?php the_title(); ?></h4>
                                                    </a>
                                                </div>
                                                <div class="blog__content-bottom d-flex justify-content-between">
                                                    <a href="<?php the_permalink(); ?>" class="read__more">Read More</a>
                                                    <div>
                                                        <a href="#">
                                                            <img src="/assets/img/blog/blog-icon/Vector@3x.png" alt="blog-icon">
                                                            <span><?php echo get_post_meta(get_the_ID(), 'views', true); ?> Views</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            <?php endwhile;
                        else : ?>
                            <p>No posts found.</p>
                        <?php endif; ?>

                        <?php wp_reset_postdata(); ?>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
