/**
 * BLOCK: algori-social-share-buttons
 *
 * Registering Algori Social Share Buttons Lite block with Gutenberg.
 * Algori Social Share Buttons Lite enables you add Social Media Share Buttons to your Gutenberg ready WordPress site.
 */

 
/**
 * External dependencies
 */
import classnames from 'classnames';
 
 
/**
 * WordPress dependencies
 */
const {
	withSelect
} = wp.data; // import { withSelect } from '@wordpress/data'
const { 
	IconButton, 
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	CheckboxControl,
	RadioControl,
	Placeholder,
	Toolbar, 
	withNotices } = wp.components; // import { IconButton, PanelBody, RangeControl, ToggleControl, Toolbar, withNotices } from '@wordpress/components';
const { Fragment } = wp.element; // import { Fragment } from '@wordpress/element';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	MediaPlaceholder,
	MediaUpload,
	AlignmentToolbar,
	RichText, 
} = wp.editor; // Import * from @wordpress/editor 


/**
 * Internal dependencies
 *
 * Import CSS.
 */
import './style.scss';
import './editor.scss';

const blockAttributes = {
	title: {
		type: 'array',
		source: 'children',
		selector: 'p',
	},
	url: {
		type: 'string',
	},
	align: {
		type: 'string',
	},
	width: {
		type: 'number',
	},
	height: {
		type: 'number',
	},
	contentAlign: {
		type: 'string',
		default: 'center',
	},
	id: {
		type: 'number',
	},
	currentPagePermalink: {
		type: 'string',
	},
	selectedSocialMediaChannels: {
		type: 'array',
		default: [],
	},
	selectedButtonType: {
		type: 'string',
		default: 'bttn-simple',
	},
	selectedButtonSize: {
		type: 'string',
		default: 'bttn-md',
	},
	selectedButtonTextOrIcon: {
		type: 'string',
		default: 'icon-and-text',
	},
	showButtonIcon: { 
		type: 'bolean',
		default: true,
	},
	showButtonText: {
		type: 'bolean',
		default: true,
	},
	facebook: {
		type: 'bolean',
		default: false,
	},
	twitter: {
		type: 'bolean',
		default: false,
	},
	googleplus: {
		type: 'bolean',
		default: false,
	},
	linkedin: {
		type: 'bolean',
		default: false,
	},
	pinterest: {
		type: 'bolean',
		default: false,
	},
	reddit: {
		type: 'bolean',
		default: false,
	},
	email: {
		type: 'bolean',
		default: false,
	},
	gmail: {
		type: 'bolean',
		default: false,
	},
	yahoo: {
		type: 'bolean',
		default: false,
	},
	print: {
		type: 'bolean',
		default: false,
	},
	blogger: {
		type: 'bolean',
		default: false,
	},
	flipboard: {
		type: 'bolean',
		default: false,
	},
	whatsapp: {
		type: 'bolean',
		default: false,
	},
	telegram: {
		type: 'bolean',
		default: false,
	},
	wechat: {
		type: 'bolean',
		default: false,
	},
	socialMediaChannels: {
		type: 'array',
		default: [
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/sharer.php?u=urlToShare',
				icon: 'fab fa-facebook-f'
			},
			{
				name: 'Twitter',
				link: 'https://twitter.com/intent/tweet?url=urlToShare',
				icon: 'fab fa-twitter'
			},
			{
				name: 'GooglePlus', 
				link: 'https://plus.google.com/share?url=urlToShare',
				icon: 'fab fa-google-plus-g'
			},
			{
				name: 'Linkedin', 
				link: 'https://www.linkedin.com/shareArticle?url=urlToShare',
				icon: 'fab fa-linkedin-in'
			},
			{
				name: 'Pinterest',
				link: 'http://pinterest.com/pin/create/button/?url=urlToShare',
				icon: 'fab fa-pinterest-p'
			},
			{
				name: 'Reddit', 
				link: 'https://reddit.com/submit?url=urlToShare',
				icon: 'fab fa-reddit-alien'
			},
			{
				name: 'Email',
				link: 'mailto:body=urlToShare',
				icon: 'fas fa-envelope'
			},
			{
				name: 'Gmail',
				link: 'https://mail.google.com/mail/?view=cm&body=urlToShare',
				icon: 'fas fa-envelope-square'
			},
			{
				name: 'Yahoo',
				link: 'http://compose.mail.yahoo.com/?body=urlToShare',
				icon: 'fab fa-yahoo'
			},
			{
				name: 'Print',
				link: 'window.print()' ,
				icon: 'fas fa-print'
			},
			{
				name: 'Blogger', 
				link: 'https://www.blogger.com/blog-this.g?u=urlToShare',
				icon: 'fab fa-blogger-b'
			},
			{
				name: 'Flipboard', 
				link: 'https://share.flipboard.com/bookmarklet/popout?v=2&url=urlToShare',
				icon: 'fab fa-flipboard'
			},
			{
				name: 'WhatsApp',
				link: 'https://web.whatsapp.com/send?text=urlToShare',
				icon: 'fab fa-whatsapp'
			},
			{
				name: 'Telegram',
				link: 'https://t.me/share/url?url=urlToShare', 
				icon: 'fab fa-telegram'
			},
			{
				name: 'WeChat',
				link: 'https://chart.apis.google.com/chart?cht=qr&chs=154x154&chld=Q%7C0&chl=urlToShare',
				icon: 'fab fa-weixin'
			}
		]
	}

};


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-algori-social-share-buttons', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	
	title: __( 'Social Share Buttons' ), // Block title.
	
	description: __( 'Grow your audience. Add a viral element to your site with Social Media Share Buttons.' ),  // Block description that appears in the block inspector. Make it short preferably.
	
	icon: 'share', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	
	keywords: [ // Block search keywords
		__( 'Algori Social Media Share Buttons' ), 
		__( 'facebook twitter googleplus linkedin pinterest reddit email gmail yahoo print blogger flipboard whatsapp telegram wechatr threema line sms skype messenger' ), 
		__( 'pocket tumblr digg buffer hackernews qzone vk weibo odnoklassniki douban xing renren meneame mailru delicious tumbleupon urfingbird livejournal' ), 
	],
	
	attributes: blockAttributes,  // Block attributes for editing in the block inspector.
	

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: ( { attributes, setAttributes, isSelected, className, noticeOperations, noticeUI } ) => {
		
		const { url, title, align, width, height, contentAlign, id, currentPagePermalink, selectedSocialMediaChannels, selectedButtonType, selectedButtonSize, selectedButtonTextOrIcon, showButtonIcon, showButtonText, socialMediaChannels } = attributes;
		const getCurrentPagePermalink = () => setAttributes( { currentPagePermalink: wp.data.select('core/editor').getPermalink() } ); getCurrentPagePermalink();
		const updateContentAlign = ( nextAlign ) => setAttributes( { contentAlign: nextAlign } );
		const updateSelectedButtonType = ( selectedButtonType ) => setAttributes( { selectedButtonType: selectedButtonType } );
		const capitalizeFirstLetter = (string) => { return string[0].toUpperCase() + string.slice(1); }

		const updateSelectedSocialMediaChannels = ( selectedSocialMediaChannel ) => { // if selectedChannel exists in selectedSocialMediaChannels remove it, otherwise add it
			
			
			const selectedSocialMediaChannelText = selectedSocialMediaChannel[0];
			
			const addSelectedChannelToArray = selectedSocialMediaChannels.concat( selectedSocialMediaChannelText ); // Avoided using .push because it mutates original 'selectedSocialMediaChannels' .NB: Also avoid .pop
			
			const showButton = {};
			showButton[ selectedSocialMediaChannelText ] = true;
			showButton[ 'selectedSocialMediaChannels' ] = addSelectedChannelToArray;
			
			const hideButton = {};
			hideButton[ selectedSocialMediaChannelText ] = false;
			hideButton[ 'selectedSocialMediaChannels' ] = selectedSocialMediaChannels;
			
			if( selectedSocialMediaChannels.includes( selectedSocialMediaChannelText ) ){  // Check whether selected social media channel exists in selectedSocialMediaChannels
				selectedSocialMediaChannels.splice( selectedSocialMediaChannels.indexOf( selectedSocialMediaChannelText ) , 1 ); // Remove selected social media channel from selectedSocialMediaChannels
				setAttributes( hideButton ); // Update attributes to hide button
			}else{

				// Add selected social media channel to selectedSocialMediaChannels using 'addSelectedChannelToArray' within 'showButton'
				
				setAttributes( showButton );  // Update attributes to show button
				
			}
			
		};
		
		
		const classes = classnames(
			selectedButtonType, 
			selectedButtonSize, 
			'bttn-primary', 
			'algori-social-share-buttons-settings'
		);
		
		
		const SocialShareButtons = ({socialMediaChannels}) => ( // loop through 'socialMediaChannels' and return selected 'SocialShareButtons'. <button> 'key' attribute is important!
			
			<Fragment>
				{socialMediaChannels.map(socialMediaChannel => (
					
					<Fragment>
					{ attributes[socialMediaChannel.name.toLowerCase()] &&
					<button 
						className={ classes + ' algori-social-share-buttons-'+socialMediaChannel.name.toLowerCase() }  
						key={ socialMediaChannel.name.toLowerCase() }
						onClick={ () => { ( socialMediaChannel.name === 'Print') ? socialMediaChannel.link : window.open( socialMediaChannel.link.replace("urlToShare", currentPagePermalink) , "_blank" ) } }>
							{ showButtonIcon && <i className={ socialMediaChannel.icon }></i> }
							{ showButtonText && __( '\u00A0 \u00A0' + socialMediaChannel.name ) }
					</button> 
					}
					</Fragment>
					
				))}
			</Fragment>	
			
		); 
		
		
		
		const controls = ( // Set Block and Inspector Controls
			<Fragment>
			
				<BlockControls>
					<AlignmentToolbar
						value={ contentAlign }
						onChange={ updateContentAlign }
					/>
				</BlockControls>
				
				<InspectorControls>
				
					<PanelBody title={ __( 'Social Share Channels' ) }> 
						<SelectControl
							multiple
							label={ __( 'Select Social Media Channels' ) }
							value={ selectedSocialMediaChannels }
							onChange={ updateSelectedSocialMediaChannels }
							options={ socialMediaChannels.map(socialMediaChannel => {
				
											const label = __( ( socialMediaChannels.indexOf(socialMediaChannel) + 1 ) + '. ' + socialMediaChannel.name );
											const value = socialMediaChannel.name.toLowerCase();
											
											return { label, value }
											
										}) 
									}
							
						/>
					</PanelBody>
					<PanelBody title={ __( 'Social Share Button Types' ) } initialOpen={ false }>
						<RadioControl
							label={ __( 'Choose a Button Type below' ) }
							selected={ selectedButtonType }
							onChange={ updateSelectedButtonType }
							options={ [
								{ label: __( 'Simple' ), value: 'bttn-simple' },
								{ label: __( 'Stretch' ), value: 'bttn-stretch' },
								{ label: __( 'Minimal' ), value: 'bttn-minimal' },
								{ label: __( 'Material Flat' ), value: 'bttn-material-flat' },
								{ label: __( 'Pill' ), value: 'bttn-pill' }
							] }
						/>
					</PanelBody>
					
				</InspectorControls>
				
			</Fragment>
		);
		
		
		if ( ! selectedSocialMediaChannels.length ) { // Show placeholder if no selected Social Media Channels
			
			return ( 
				<Fragment>
					{ controls }
					<Placeholder
						icon="share"
						label="Use the Block Inspector section to Select the Share Buttons you want to add here."
					/>
				</Fragment>
			);
			
		}
		
		return ( // Return Social Share Butons with selected block inspector settings and block controls. 
			<Fragment>
				{ controls }
				<div style={{ 'text-align': contentAlign }} >
					
					<SocialShareButtons socialMediaChannels={socialMediaChannels} /> 
					
				</div>
			</Fragment>
		);
		
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	 
	save: ( { attributes, className } ) => {
		
		const { url, title, align, width, height, contentAlign, id, currentPagePermalink, selectedSocialMediaChannels, selectedButtonType, selectedButtonSize, selectedButtonTextOrIcon, showButtonIcon, showButtonText, socialMediaChannels } = attributes;
		
		const classes = classnames(
			selectedButtonType, 
			selectedButtonSize, 
			'bttn-primary', 
			'algori-social-share-buttons-settings'
		);
		
		const SocialShareButtons = ({socialMediaChannels}) => ( // loop through 'socialMediaChannels' and return selected 'SocialShareButtons'. <button> 'key' attribute is important!
			
			<Fragment>
				{socialMediaChannels.map(socialMediaChannel => (
					
					<Fragment>
					{ attributes[socialMediaChannel.name.toLowerCase()] &&
					<button 
						className={ classes + ' algori-social-share-buttons-'+socialMediaChannel.name.toLowerCase() }  
						key={ socialMediaChannel.name.toLowerCase() }
						onClick={ ( socialMediaChannel.name === 'Print') ? socialMediaChannel.link : "window.open('" + socialMediaChannel.link.replace('urlToShare', currentPagePermalink) + "', '_blank')" }>
							{ showButtonIcon && <i className={ socialMediaChannel.icon }></i> }
							{ showButtonText && __( '\u00A0 \u00A0' + socialMediaChannel.name ) }
					</button> 
					}
					</Fragment>
					
				))}
			</Fragment>	
			
		); 
		
		return (
			<div style={{ 'text-align': contentAlign }} >
					
				<SocialShareButtons socialMediaChannels={socialMediaChannels} />
				
			</div>
		);
		
	},
	
} );
