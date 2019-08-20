import {tiny} from '/tiny-graphics.js';
                                                  // Pull these names into this module's scope for convenience:
const { vec3, vec4, color, Matrix, Mat4, 
         Material, Shader, Scene, Canvas_Widget } = tiny;

const defs = {};

    // Now we have loaded everything in the file tiny-graphics.js. This yielded "tiny", an object wrapping its stuff.

const Minimal_Shape = defs.Minimal_Shape =
class Minimal_Shape extends tiny.Vertex_Buffer
{                                     // **Minimal_Shape** an even more minimal triangle, with three
                                      // vertices each holding a 3D position and a color.
  constructor()
    { super( "position", "color" );
              // Describe the where the points of a triangle are in space, and also describe their colors:
      this.arrays.position = [ vec3(0,0,0), vec3(1,0,0), vec3(0,1,0) ];
      this.arrays.color    = [ color(1,0,0,1), color(0,1,0,1), color(0,0,1,1) ];
    }
}

const Basic_Shader = defs.Basic_Shader =
class Basic_Shader extends Shader
{                                  // **Basic_Shader** is nearly the simplest example of a subclass of Shader, which stores and
                                   // maanges a GPU program.  Basic_Shader is a trivial pass-through shader that applies a
                                   // shape's matrices and then simply samples literal colors stored at each vertex.
 update_GPU( context, gpu_addresses, graphics_state, model_transform, material )
      {       // update_GPU():  Defining how to synchronize our JavaScript's variables to the GPU's:
        const [ P, C, M ] = [ graphics_state.projection_transform, graphics_state.camera_inverse, model_transform ],
                      PCM = P.times( C ).times( M );
        context.uniformMatrix4fv( gpu_addresses.projection_camera_model_transform, false, 
                                                                          Matrix.flatten_2D_to_1D( PCM.transposed() ) );
      }
  shared_glsl_code()           // ********* SHARED CODE, INCLUDED IN BOTH SHADERS *********
    { return `precision mediump float;
              varying vec4 VERTEX_COLOR;
      `;
    }
  vertex_glsl_code()           // ********* VERTEX SHADER *********
    { return this.shared_glsl_code() + `
        attribute vec4 color;
        attribute vec3 position;                            // Position is expressed in object coordinates.
        uniform mat4 projection_camera_model_transform;

        void main()
        {                    // Compute the vertex's final resting place (in NDCS), and use the hard-coded color of the vertex:
          gl_Position = projection_camera_model_transform * vec4( position, 1.0 );
          VERTEX_COLOR = color;
        }`;
    }
  fragment_glsl_code()         // ********* FRAGMENT SHADER *********
    { return this.shared_glsl_code() + `
        void main()
        {                                                     // The interpolation gets done directly on the per-vertex colors:
          gl_FragColor = VERTEX_COLOR;
        }`;
    }
}

class Minimal_Webgl_Demo extends Scene
{                                       // **Minimal_Webgl_Demo** is an extremely simple example of a Scene class.
  constructor( webgl_manager, control_panel )
    { super( webgl_manager, control_panel );
                                                // Don't create any DOM elements to control this scene:
        this.widget_options = { make_controls: false, show_explanation: false };
                                                // Send a Triangle's vertices to the GPU's buffers:
      this.shapes = { triangle : new Minimal_Shape() };
      this.shader = new Basic_Shader();
    }
  display( context, graphics_state )
    {                                           // Every frame, simply draw the Triangle at its default location.
      this.shapes.triangle.draw( context, graphics_state, Mat4.identity(), new Material( this.shader ) );
    }
}

const Main_Scene = Minimal_Webgl_Demo;
const Additional_Scenes = [];

export { Main_Scene, Additional_Scenes, Canvas_Widget, defs }