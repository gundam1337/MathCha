from manim import *

class PythagoreanTheorem(Scene):
    def construct(self):
        # Create title
        title = Text("Pythagorean Theorem").scale(1.2)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait(1)

        # Create right triangle
        # triangle = Polygon(
        #     ORIGIN, 4*RIGHT, 3*UP,
        #     color=WHITE
        # )
        # self.play(Create(triangle))
        # self.wait(1)

        # Label sides
        # labels = VGroup(
        #     MathTex("a").next_to(triangle, DOWN),
        #     MathTex("b").next_to(triangle, RIGHT),
        #     MathTex("c").next_to(triangle, UP+LEFT)
        # )
        # self.play(Write(labels))
        # self.wait(1)

        # Show equation
        # equation = MathTex("a^2 + b^2 = c^2")
        # equation.next_to(triangle, DOWN, buff=1)
        # self.play(Write(equation))
        # self.wait(2)